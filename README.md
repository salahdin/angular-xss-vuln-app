# XSS Test Application

This project is an Angular application designed to test for XSS vulnerabilities. It allows users to input text and see how it is rendered both safely and unsafely.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Getting Started

Follow these steps to get the application up and running:

### 1. Clone the Repository

```bash
git clone https://github.com/salahdin/angular-xss-vuln-app.git
cd xss-test-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm start
```

The application will be available at `http://localhost:4200`.

## Testing XSS Payloads

You can test the application by passing different payloads via the URL as query parameters.

### Example Payloads


1. **Script Injection (Unsafe)**

   URL: `http://localhost:4200/xss-test?input=<script>alert('XSS')</script>`

   This will attempt to inject a script tag. Note that this is unsafe and should be handled carefully.

2. **HTML Injection**

   URL: `http://localhost:4200/xss-test?input=<b>Bold Text</b>`

   This will render the text in bold.

## Application Structure

- `src/main.ts`: Entry point of the application.
- `src/app/app.config.ts`: Application configuration.
- `src/app/app.component.html`: Main component template.
- `src/app/xss-test/xss-test.component.ts`: Component handling the XSS test logic.
- `src/app/xss-test/xss-test.component.html`: Template for the XSS test component.

## Notes

- Ensure you handle user input safely to avoid XSS vulnerabilities.
- This application is for testing purposes only. Do not use it in production without proper security measures.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
