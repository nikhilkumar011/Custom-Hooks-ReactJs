 #deployed link : https://symphonious-bunny-081685.netlify.app/


Created a custom React hook (useFetch) to separate data-fetching logic from UI components, improving code reusability and readability.

I used the useState feature to manage my data, the loading process and any errors that come up.

I used the useEffect function to make sure that the API call happens when we use the hook. This way the data is fetched for us automatically. The useEffect function is really important here because it helps us get the data we need from the API call when the hook is used.

The user will see the loading... while the data is being fetched. because till that time it is set to true. as soon as data is fetched. loading is set to false. 

Included error handling to gracefully manage failed API requests instead of crashing the app.


