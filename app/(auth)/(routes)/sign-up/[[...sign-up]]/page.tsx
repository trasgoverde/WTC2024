// components/Sign-up.tsx
"use client"

import { useEffect } from 'react';

const Login: React.FC = () => {
  useEffect(() => {
    // Magic Link script injection
    const script = document.createElement('script');
    script.src = 'https://auth.magic.link/pnp/login';
    script.setAttribute('data-magic-publishable-api-key', 'pk_live_549DDF1068EA8707');
    script.setAttribute('data-terms-of-service-uri', '/path/to/your/terms-of-service');
    script.setAttribute('data-privacy-policy-uri', '/path/to/your/privacy-policy');
    script.setAttribute('data-redirect-uri', '/callback'); // Replace with the location of your callback.html

    document.head.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div>
      {/* Add any additional components or content here */}
    </div>
  );
};

export default Login;