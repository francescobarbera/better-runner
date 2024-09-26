# Better Runner

Better Runner is a straightforward Node.js application designed to calculate and display essential information about your runs, such as total distance, duration, and elevation gain, based on your running data.

## Rationale

As a runner who enjoys tracking my runs, I found existing apps like Strava to be comprehensive but somewhat restrictive when it comes to extracting and analyzing specific data.
I wanted a simple tool that focuses on the metrics I care about most.

For instance, Strava's segmentation feature is excellent, but it doesn't allow for easy comparison of preferred splits unless they are predefined segments.

### Manual Data Entry

While it's true that manual data entry requires effort, it also ensures that you pay closer attention to your data, leading to a deeper understanding of your performance.
Spending an hour running and just a couple of minutes manually inputting the data is a worthwhile trade-off for me.

### TypeScript

I spend most of my time coding in a text editor, where I find myself highly productive. Compared to visual tools, text editors allow for faster information input and the use of familiar keyboard shortcuts.
TypeScript, in particular, helps me avoid common mistakes and provides a clearer understanding of the data structure, enhancing my overall coding efficiency.
Fot these reasons, I chose to build this project using TypeScript and use it as a live interpreter of the data.
I don't have a database for now, the amount of data I expect to handle is small, so I can store it in a ts file.
That allows me to quickly add, remove, or modify data without the need for a database.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [License](#license)

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:

    ```sh
    git clone https://github.com/your-username/better-runner.git
    cd better-runner
    ```

2. **Install dependencies**:

    ```sh
    yarn install
    ```

## Usage

To run the project, use the following command:

```sh
yarn build
yarn start
```

This will execute the build and then the `build/index.ts` file, which calculates and displays the total distance, duration, and elevation gain from the running data.
