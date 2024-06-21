# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

RequiremenetS:

- Single Page Appp
- React
- Use API

Interests:
- Trading cards for NFL --> click a player card (which will contain photo and basic info) --> latest updates on player health etc.
    - use case: people that play fantasy sports

- Travel Card --> Show the weather of that place, average flight price, general information

- Mother to be:
    - shopping tool/shopping guide
        - What trimester of pregnancy are you in?
            - Cards: First, Second, or Third
                        - variable --> list of items for each trimester
                        - ft_items = ['item_1', 'item_1', ...]

                                - do an API call to generate a list item by searching for each key word in the ^ list
                                    < div > Product Name and Photo  <div> --> click it, it redirects to the link (which we get from API)
                        - if the use clicks first, second third whatever, then we invoke the API call to go over the list items in the selected trimester and product a link/button with an amazon redirect
                - First
                    - API call to our API:
                        - present with a list of items to purchase along with an amazon link to a recommended item
                            --> for each item
                                    - API call --> pull one item from the amazon API call

