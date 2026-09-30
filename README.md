# ByteSpace

A responsive web application built as part of a technical assessment. The project focuses on clean UI, reusable components, authentication, and a smooth user experience.

### Tech Stack

* **Next.js** — React framework
* **JavaScript (JSX)**
* **GSAP**
* **MongoDB**
* **Mongoose ODM**
* **NextAuth.js**
* **React Hook Form**
* **Tailwind CSS**

### Features

* Responsive landing page
* Authentication pages
* Custom 404 / URL Not Found page
* Form validation
* User authentication
* Reusable and component-based structure
* Responsive design across devices

### Getting Started

Clone the repository and install the dependencies:

```bash
npm install
```

Create a `.env.local` file and add the required environment variables.

```
NEXTAUTH_SECRET=<generate own secret using Git Bash: openssl rand -base64 32>
MONGODB_URI=<your mongodb uri>
DB_NAME=<your db name>
GOOGLE_CLIENT_ID=<your google OAuth client ID>
GOOGLE_CLIENT_SECRET=<your google OAuth client secret>
```

Then run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### Development

The project was developed using a separate Git branch and follows a component-based approach to keep the code clean, reusable, and maintainable.
