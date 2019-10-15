# Brazilian Amazon Fires
###### Project 2: Interactive Front-End Project - Code Institute
This website aims to raise awareness to the fires that are happening in the Amazon Rainforest through the years. As the Amazon Rainforest helps with the regulating of global warming, it is important for there to be awareness. This website aims to do so and hopefully gather donations that could help in stopping the fires as well.

Specifically, this website looks at the fires and their effects in the Brazilian states that are part of the rainforest which is sometimes known as the Brazilian Amazon. 

## Demo
A live demo can be found [here.](https://diyanah08.github.io/project2-brazilian-amazon/)

## UX
This website can be used by many and anyone who would like to know about the fires that are happening in the Amazon.

Below are several user stories for the website:
- As the Brazilian Government, I want to inform the world to be aware of what is happening in my states so that I will be able to get donations in helping me fight the fires.
- As the Brazilian Government, I want to inform the world to be aware of the effects of the fires such as carbon emissions causing respiratory problems so that I will be able to get help from organizations such as Red Cross to help me with the casualties.
- As an environmentalist, I want to have a platform to be able to share information to others about what is happening in Brazil so that with awareness, more people can help in fighting the fires through donation or pressure to the government.
- As a reader, I want to know what I can do to help with the issue so being able to read about it will incline me to make a donation.

Below is the detailed UX planning of the website from the Strategy to the Surface.

#### Strategy:
With the increased worry for global warming, it is getting more and more important for there to be as many means of information distribution.
Specifically so for the Amazon Rainforest as it is the lungs of the earth.
Many may not be aware of the constant fires that are occurring there.
Additionally, as the Brazil states are the areas that have the highest percentage of forest in them, it is a good idea to start with them.

#### Scope:
The site will include:

- A map of the Brazilian states
- Charts of spread of fire through the years
- Presentation of forest fire effects
- Up-to-date news on the fires
- Ability for users to donate to help the cause

#### Structure:
The site will use a single page application with navigation bar which is intuitive and simple.

To view the original wireframe of the website click [here.](https://github.com/diyanah08/project2-brazilian-amazon/tree/master/wireframe/wireframe.jpg)

#### Skeleton:
Each page will have a header, a simple text to tell user what the page is about, the main content(eg map, charts) and some pages will have additional information at the bottom of the page after the main content.


#### Surface:
As the site is about the fires in the rainforest, the colour scheme of this site is mostly green with hints of red and off-white to resemble tress, fire and smoke.
Only the charts have different colours to highlight the different states there are.
Fonts are also limited to 3 kinds with headers having 1 font, information having another and charts having a different font.
This hence enables users to differentiate the areas of the page.

## Features

### Existing Features
###### 1) Webpage:
- The website is a single page application: preloads the data to allow faster loading when navigating through the website.
- The website is also mobile responsive: allows users to be able to look through the site on different electronics comfortably.

###### 2) Navigation Bar [Bootstrap]:
- A navigation bar if fixed to the top of the page to allow users quick navigation even when scrolling down each page.

##### HOMEPAGE / MAPS / BRAZILIAN AMAZON
###### 3) Maps [Mapbox]:
- Mapboxgl is used in this website: allows users to have a visual of where the different states are.
- Map markers and popups: displays information about the different states when clicked on. The description is loaded up using the mapboxgl layers and other markers and popups can be added in if needed.

##### PAGE 2 / CHARTS / SPREAD OF FIRE
###### 4) Charts [d3.js, dc.js, crossfilter):
In the Spread of Fires page, there are 4 charts:

- Pie chart of number of accumulated fires from 1998-2017 for each state.
- Bar chart of the cumulative number of fires by years from 1998-2017.
- Bar chart of the cumulative number of fires by month from 1998-2017.
- Composite chart of the fires grouped by months from 1998-2017.

As the charts are all created on the same cross-filter, the graphs are connected and interactive.

When a user clicks on a state on the pie chart, the other charts will transform automatically so that users will be able to see:
- How many fires per year in the state.
- How many fires per month cumulatively.
- How many fires grouped by month for each year.

When a user clicks on a year on the bar chart, they can see:
- How many fires in the Brazilian Amazon per year and by month.

Beneath all the charts, there is also some extra information related to the number of occurrences of the fires.

##### PAGE 3 / PESENTATION / FOREST FIRE EFFECTS
###### 5) This page consists a presentation of the firest fire effects.
- It also provides some information of how is affects the earth as a whole.
- The user will be able to click the play button on the presentation and use the arrow keys on the keypad to go through the slides.

##### PAGE 4 / NEWS API / IN THE NEWS
###### 6) API [News API, axios, jQuery]
- When the ‘In The News’ link is clicked in the navbar, the page will show excerpt of articles that was retrieved with axios from News API.
- Each article is displayed as a media card which will show an image, the title of the article, a short excerpt of what the article is about and a link that will open in a new tab for users to read the full article.
- Should an image not be able to be retrieved from News API, an alternative image will be loaded instead.
- As the articles was retrieved from News API without putting in a fixed parameter for date, new articles will be shown in the page when they are retrieved from News API.

##### FOOTER / DONATE TO THE AMAZON RAINFOREST
###### 7) External link
- The footer consists of a link that will open to an external site in a new tab when clicked which has a way for users to make a donation to help the Amazon Rainforest.

### Features Left to Implement
1) Ability to click on chart on mobile devices to show value as hover does not work on mobile.
2) More mobile responsiveness: e.g. mapbox to be able to move in safari on iPhone.
3) More information for the ‘Extend of Damage’ page including:
    - Videos of the aftermath
    - Consequences to health of people in the region
    - Biodiversity consequences
4) Fix site to be able to be viewed on Internet Explorer [currently map and news api unavailable]
5) Fix site to be able to show page still even after links are open in new tabs

## Technologies Used
- HTML
    - [BOOTSTRAP](https://getbootstrap.com/docs/4.3/getting-started/introduction/) was used for several components in the site.
- CSS
    - [GOOGLE FONTS](https://fonts.google.com/) was used to provide a variety of fonts through out the site.
- JavaScript
- [JQuery](https://code.jquery.com/)
    - Used to simplify DOM manipulation.
- [Kaggle](https://www.kaggle.com/)
    - Used to get data for the site.
- [Mapboxgl](https://docs.mapbox.com/mapbox-gl-js/overview/)
    - Used to provide location services to append information with markers and popups.
    - [MAKI ICONS](https://labs.mapbox.com/maki-icons/) by mapbox was used as markers in the map.
- [D3](https://cdnjs.com/libraries/d3), [DC](cdnjs.com/libraries/dc) and [Crossfilter](https://cdnjs.com/libraries/crossfilter)
    - Used to provide visualizations in terms of pie chart, bar charts and composite charts that are interactive and linked to each other.
- [Prezi](https://prezi.com)
    - Used to create presentaion for display of information.
- [Axios](https://cdnjs.com/libraries/axios)
    - Used for data retrieval from an API.
- [News API](https://newsapi.org/)
    - Used to retrieve live articles from all over the web about the Amazon Rainforest.

## Testing
For this project, no automated testing was used.
Instead, manual testing was conducted.

The steps were:
##### 1) Navigating to each page in the single page application
- When each navigation link is clicked, it displays the corresponding page with the same navigation bar and footer – checked

##### 2) Brazilian Amazon page
- On load, the site displays the ‘Brazilian Amazon’ page which consists of a left section with some information and a right section of a map – checked
- The map has seven clickable markers with the name of state shown below the marker – checked
- When clicked on, the markers will display a popup with information on the state – checked

##### 3) Spread of Fire page
- When the link, site will load the four charts and some information at the bottom – checked
- When clicked on each part of the different charts, the other charts will transform accordingly – checked
- When hovered over a certain aspect of the chart, the total number associate to the aspect will appear – checked
    - However not available on mobile devices

##### 4) Forest Fire Effects page
- When the link, site will load some information on the extent of damage – checked
- Presentation can be played and loaded from slide to slide – checked

##### 5) In the News page
- When the link, site will load some information on the extent of damage – checked
- When linked on link ‘[Read full article]’ for each article, new window will open for users to be able to read full article/watch video or listen to a podcast – checked

##### 6) Footer
- When clicked on the footer ‘Donate to the Amazon Rainforest’ a new window will open to an external source where users can donate - checked


##### The above steps for testing were done on:


| BROWSERS          | DEVICES                                    | TEST OUTCOMES                                                                                                                                                         |
| ----------------- |:------------------------------------------:| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Internet Explorer | Windows 10                                 | NewsAPI and mapboxgl is not compatible on IE.                                                                                                                         |
| Google Chrome     | Windows 10, Samsung S9, Samsung Galaxy Tab | Testing appeared to pass                                                                                                                                              |
| Firefox           | Windows 10                                 | Testing appeared to passed                                                                                                                                            |
| Safari            | iPhone 6 & 7, iPad Pro, MacBook Pro        | On iPhone 6 & 7 & iPad Pro, the mapbox is unable to zoom out or moved hence some information from the popup is cut off. Some fonts are also not compatible on Safari. |
| Samsung Internet  | Samsung S9, Samsung Galaxy Tab             | Testing appeared to passed                                                                                                                                            |

###### Unfortunately the issues reflected above have not resolved yet at the point of submission and the issues and will be part of the features left to implement

## Deployment
This project was hosted through GitHub Pages.
- A GitHub repository was created for this project and titled ‘Brazilian-Amazon’.
- Throughout the project, regular commits were made when significant additions or edits were made.
- The commits were then pushed to the master branch of the repository.
- As GitHub was used for version control through commits, GitPages was then used to deploy the project website publically.
- The site is deployed from the master branch directly and when there is an update to the and new commits are made, GitPages updates automatically and user will be able to view the updated site within minutes.
- Files for the project committed to GitHub can be pulled and run locally [here.](https://github.com/diyanah08/project2-brazilian-amazon)
- The link to the webpage can be found [here.](https://diyanah08.github.io/project2-brazilian-amazon/)

## Credits
#### Content
- The information for the map popups was obtained from [here.](https://www.brazil.org.za/)
- The dataset for the charts was obtained from [here.](https://www.kaggle.com/gustavomodelli/forest-fires-in-brazil)
- The information from pages of "Brazilian Amazon", “Spread of Fire” & “Forest Fire Effects” was obtained from [here](http://www.fao.org/in-action/at-home-in-the-amazon/en/), [here](https://www.sciencedaily.com/releases/2015/08/150824064927.htm), [here](https://www.bbc.com/news/world-latin-america-49433767), [here](https://news.mongabay.com/2019/08/amazon-rainforest-fires-leave-sao-paulo-in-the-dark/) and [here.](https://rainforests.mongabay.com/deforestation/archive/Brazil.html)

#### Media
- The photos used in this site were obtained from pexels.com and [here.](https://news.mongabay.com/2019/08/amazon-rainforest-fires-leave-sao-paulo-in-the-dark/)

#### Acknowledgements
- I received inspiration for this project from [here.](https://www.kaggle.com/sharankhanal/amazon-forest-fire-data-exploration)
- The seven states were chosen because of inspiration from [here.](https://www.researchgate.net/publication/262069639_Forest_Fragmentation_and_Its_Potential_Implications_in_the_Brazilian_Amazon_between_2001_and_2010)
