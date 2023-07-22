
# Intellij Help 

## How would I run this?

1. Open the Gradle tab on the right-hand side of IntelliJ IDEA interface.
1. Under Tasks, locate and expand the browserDevelopmentRun task (or similar, the exact name might depend on your project's setup), which is part of the application plugin. This task will compile the project using Kotlin/JS and host it on a local development server.
1. Double-click the jsBrowserDevelopmentRun task. The server should start and the project will be available at http://localhost:8080/ (or another port if you've configured it differently).
1. Open your web browser and navigate to http://localhost:8080/ to see your application.

## How would I get a production build?

1. In the Gradle tab in IntelliJ IDEA, navigate to the browser subdirectory under Tasks.
1. Now, look for the Gradle task named jsBrowserProductionWebpack.
1. Double-click on the jsBrowserProductionWebpack task. This task builds the project for production: it compiles your Kotlin code into JavaScript, applies optimizations, and generates a bundle.
1. After the task completes, your bundled app can be found in the project's build/distributions directory.
1. Now you can deploy the contents of this directory (build/distributions) to any static website hosting provider.