# Developer Guide for Refer and Earn

This guide will help you understand the structure of the project and how to extend or modify the utility.

## Project Structure

The project is structured as follows:

- `src/main/java/com/rishabh/referralandearn`: This is the main package where all the source code resides.
  - `config`: This package contains configuration classes like `WebConfig.java` for CORS configuration.
  - `controller`: This package contains controller classes like `UserController.java` for handling HTTP requests.
  - `service`: This package contains service interfaces and their implementations for business logic.
  - `model`: This package contains model classes representing the database entities.
  - `dto`: This package contains DTO (Data Transfer Object) classes for transferring data between processes.
  - `request`: This package contains classes for handling incoming requests.

- `src/main/resources`: This directory contains resources like `application.properties` for configuring the application.

## Extending the Utility

To extend the utility, you can follow these steps:

1. Identify the area of the application you want to extend. This could be adding a new feature, enhancing an existing feature, etc.
2. Create the necessary classes in the appropriate packages. For example, if you're adding a new feature, you might need to create a new controller, service, model, DTO, and request classes.
3. Update the `application.properties` file if necessary. For example, if your new feature requires additional configuration.
4. Test your changes thoroughly. Make sure to add unit tests for your new classes.

## Modifying the Utility

To modify the utility, you can follow these steps:

1. Identify the area of the application you want to modify. This could be changing the behavior of an existing feature, fixing a bug, etc.
2. Locate the classes that need to be modified. This could be one or more classes in any of the packages.
3. Make the necessary changes in the classes. This could involve changing the code in methods, adding new methods, removing methods, etc.
4. Update the `application.properties` file if necessary. For example, if your changes require modifying the configuration.
5. Test your changes thoroughly. Make sure to update the unit tests to reflect your changes.

## Building and Running the Project

To build and run the project, follow these steps:

1. Open a command line window and navigate to the root directory of your project (where the `pom.xml` file is located).
2. Compile the project and create the jar file by running the following command: `mvn clean install`.
3. Once the build is successful, navigate to the `target` directory and run the jar file using the following command: `java -jar your-artifactId-your-version.jar`.

Please note that you need to have Java and Maven installed on your machine to run these commands.

## Contributing

We welcome contributions from all developers. Please read our contributing guidelines before making a contribution.
