
import { Magic } from 'magic-sdk';

const magic = new Magic(process.env.MAGIC_API_KEY);

try {
  await magic.auth.loginWithCredential();
} catch {
  // Handle errors if required!
}

// You can also provide the credential yourself
try {
  await magic.auth.loginWithCredential('iamacredentialtoken');
} catch {
  // Handle errors if required!
}

// You can also provide the credential as a query string
try {
  await magic.auth.loginWithCredential(window.location.search);
} catch {
  // Handle errors if required!
}