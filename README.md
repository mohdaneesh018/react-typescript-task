React + TypeScript + TailwindCSS Internship Task =>
This project is created as part of the internship selection assignment.
The goal was to demonstrate React, TypeScript, TailwindCSS, Routing, Context API, and Performance
Optimization.

Setup Instructions =>
1. Clone the repository
2. Install dependencies: npm install
3. Start the development server: npm run dev
4. Open in browser: http://localhost:5173


Decisions Taken =>
1. Context Splitting-
- AuthContext handles authentication only.
- AppDataContext handles banner and contact form data.

2. Reusable Components-
- Banner Component
- ContactForm Component

3. Protected Routing-
- /login → Public
- / → Protected
- /* → Not Found

4. Performance Optimizations (FS05) =>
- React.memo applied to Banner and ContactForm.
- useCallback applied to event handlers.
- useMemo applied to bannerData.
- Avoided prop drilling.
- Proper context splitting.

5. React Profiler Screenshots =>
- (Attach before and after optimization screenshots)


Task Completion Summary
- FS01 – Login
- FS02 – Landing Page
- FS03 – Global State
- FS04 – Routing
- FS05 – Performance Optimization
- FS06 – Folder Structure