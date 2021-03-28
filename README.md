# Opt-Win: Securing Your Stock Options for the Future

## Inspiration
Options trading is hard. As passionate investors, we understand that there are many different stock options to buy. It is hard to calculate which ones will give the most return given that there are so many factors such as volatility, time to maturity, and strike price that we must consider. Buying the right call and put options can lead to great returns, so we hope to facilitate this process for investors, amateur and experienced.

## Our Solution
Using the Black-Scholes formula that models the pricing of an options contract, we aim to show the user the most profitable call and put options given their prediction of stock movement. Our program, Opt-Win, is the ultimate, easy-to-use website to help you find the best stock options with the highest return rates. 

## How to Use Opt-Win 
To see the website, you can simply click on the domain link provided in the GitHub. However, if this link doesn’t work in the future or you would like to run the website locally, first open Git Bash. Then, change directories (cd) into your Options/app folder, and type “npm install” (without the quotation marks) to install node_modules. Afterwards, type “npm start” to start the localhost on your computer.

To navigate Opt-Win, first, enter the stock symbol of the option you are interested in. After clicking submit, you will see the name of the stock’s company, a real-time chart of the stock, as well as the stock’s current price. Next, enter what you expect the price of the stock to be and the future date that the stock will reach this price. If you long a stock, your expected price should be higher than the current stock price, and if you short a stock, the expected price you input should be lower. Our program will output a table of the best option transactions of the stock with estimated return in descending order. 

## Technologies we used
We used a combination of React.js, Node.js, HTML, and CSS in the IDEs Sublime and Visual Studio. Using the Marketplace and TDAmeritrade Developer APIs, we retrieved our stock data. We had a components folder for all our React components and separated our styling into another folder. During our website creation process, we uploaded updated code into a shared Google Drive and committed final versions into GitHub. To test our website, we deployed locally using npm, and to deploy our final website, we used GitHub Pages.  

## Challenges we faced
Although we ran into many challenges, we were able to overcome them. For instance, we were initially unfamiliar with the Black-Scholes formula to determine the pricing for an options contract. We also struggled with adding stock charts to our code, where for instance, data was sent to the stock chart before finishing retrieval from API. However, we discovered that widgets were effective for solving these problems. Surprisingly, we spent a lot of time making the program look visually appealing, and we needed to format the results table to vertically align, but we fixed this by using CSS-grid.

## Accomplishments that we're proud of
We had several major achievements, including creating a more aesthetically pleasing and user-friendly website than other options calculators. We also learned by doing (since for some of us, this was our first time interacting with particular pieces of tech) and most importantly, we created a novel application to investigate options that will ease the decision-making process for investors.

## What we learned
In our project, we learned to use widgets instead of libraries, which made the website easier to code. We also combined finance and technology to create a meaningful project while furthering our knowledge of React, HTML, and CSS. Additionally, we learned to extract data from financial APIs and manage our time to finish under a tight timeframe. 

## What's next for Opt-Win
In the future, this website could allow users to enter a confidence interval, support other models such as the Binomial Model, and include other types of options trading such as interest rate options. It could also be part of a larger program that supports the recommendation of other assets, such as future, forwards, and swaps.
