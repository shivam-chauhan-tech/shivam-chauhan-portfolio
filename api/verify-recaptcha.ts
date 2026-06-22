type VercelRequest = {
  method?: string;
  body?: { token?: string };
};

type VercelResponse = {
  status: (code: number) => VercelResponse;
  json: (data: unknown) => void;
};

type RecaptchaVerifyResponse = {
  success: boolean;
  score?: number;
  action?: string;
  'error-codes'?: string[];
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    return res.status(500).json({ success: false, error: 'reCAPTCHA not configured' });
  }

  const token = req.body?.token;
  if (!token || typeof token !== 'string') {
    return res.status(400).json({ success: false, error: 'Missing reCAPTCHA token' });
  }

  try {
    const params = new URLSearchParams({ secret, response: token });
    const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });

    const data = (await verifyRes.json()) as RecaptchaVerifyResponse;

    if (!data.success) {
      return res.status(400).json({ success: false, error: 'reCAPTCHA verification failed' });
    }

    if (data.action && data.action !== 'contact') {
      return res.status(400).json({ success: false, error: 'Invalid reCAPTCHA action' });
    }

    const score = data.score ?? 1;
    const minScore = Number(process.env.RECAPTCHA_MIN_SCORE ?? '0.5');

    if (score < minScore) {
      return res.status(400).json({ success: false, error: 'reCAPTCHA score too low' });
    }

    return res.status(200).json({ success: true });
  } catch {
    return res.status(500).json({ success: false, error: 'Verification failed' });
  }
}
