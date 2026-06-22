const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

let scriptLoadPromise: Promise<void> | null = null;

export const isRecaptchaEnabled = (): boolean => Boolean(SITE_KEY);

const loadRecaptchaScript = (): Promise<void> => {
  if (!SITE_KEY) {
    return Promise.resolve();
  }

  if (window.grecaptcha) {
    return Promise.resolve();
  }

  if (scriptLoadPromise) {
    return scriptLoadPromise;
  }

  scriptLoadPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src^="https://www.google.com/recaptcha/api.js"]'
    );

    if (existingScript) {
      existingScript.addEventListener('load', () => resolve());
      existingScript.addEventListener('error', () => reject(new Error('Failed to load reCAPTCHA')));
      return;
    }

    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load reCAPTCHA'));
    document.head.appendChild(script);
  });

  return scriptLoadPromise;
};

export const executeRecaptcha = async (action = 'contact'): Promise<string | null> => {
  if (!SITE_KEY) {
    return null;
  }

  await loadRecaptchaScript();

  return new Promise((resolve, reject) => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(SITE_KEY, { action })
        .then(resolve)
        .catch(reject);
    });
  });
};

export const verifyRecaptchaToken = async (
  token: string
): Promise<{ success: boolean; message: string }> => {
  if (!SITE_KEY) {
    return { success: true, message: '' };
  }

  if (import.meta.env.DEV) {
    return { success: true, message: '' };
  }

  try {
    const response = await fetch('/api/verify-recaptcha', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    });

    const data = (await response.json()) as { success?: boolean };

    if (!response.ok || !data.success) {
      return {
        success: false,
        message: 'Security verification failed. Please try again.',
      };
    }

    return { success: true, message: '' };
  } catch {
    return {
      success: false,
      message: 'Unable to verify security check. Please try again.',
    };
  }
};
