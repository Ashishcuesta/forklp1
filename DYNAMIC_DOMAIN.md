# Dynamic Domain Detection

## Overview
The application now automatically detects the domain it's running on without requiring manual configuration in `.env` files.

## How It Works

### Client-Side (Browser)
When the code runs in the browser, it uses:
```javascript
window.location.hostname
```
This automatically gets the current domain from the browser's URL bar.

### Server-Side (Next.js SSR)
When rendering on the server, it uses the HTTP request headers:
```javascript
headers?.get('host') || headers?.host
```

### Development Override (Optional)
If you need to test with a specific domain during development, you can uncomment the line in `.env.local`:
```bash
NEXT_PUBLIC_OVERRIDE_DOMAIN=your-domain.com
```

## Examples

| Scenario | Domain Detected |
|----------|----------------|
| User visits `https://oman.kidoz.xyz` | `oman.kidoz.xyz` |
| User visits `https://uae.kidoz.xyz` | `uae.kidoz.xyz` |
| User visits `http://localhost:3000` | `localhost` |
| Development with override set | Value from `.env.local` |

## API Integration
The detected domain is automatically used to fetch the correct configuration:
```
https://kidoz.xyz/api/lp/resolve-lp-domain/?domain={detected-domain}
```

## Benefits
✅ No manual configuration needed for each deployment  
✅ Works automatically across different environments  
✅ Easy to test with different domains  
✅ Can still override for development/testing when needed
