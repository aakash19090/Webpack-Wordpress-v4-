# Webpack implementation in Wordpress
In this repo, I have implemented Webpack v4 with Vanila Wordpress. This includes configurations for following:

1.) Ability to write SASS/SCSS/CSS in project.

2.) Watch & compile it into a bundled CSS.

3.) Prevent Caching of CSS/JS assets if any line of code is changed in assets through automated Hashes generation.

4.) Resolve @imports into main SCSS file.

5.) Have different environment for both Development & Production mode.

6.) Minify CSS & JS automatically in Production mode.

7.) Clean old CSS & JS hashed assets before each build if any line of code is changed and will be inlcuded dynamically in functions.php file. 

8.) Ability to create automated HTML files to include hashed Stylesheets & Scripts dynamically. ( NOTE: This part is under development ).


# More Feature Implementations :

Looking to include more cool features during development to save tons of Time, bandwidth of data, and produce optimized output

1.) Live reloading on any change in SCSS or JS file with updated uncached CSS/JS automatically by creating a DEV-Server.

2.) Implement HMR (Hot Module Replacement) feature, just like we use in React.js, so that it will only change that part in DOM that is changed. Will save lots of time and data-bandwidth that gets wasted by reloading with new assets & images. COOL!, isn't it ?

