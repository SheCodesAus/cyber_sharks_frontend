# Your Product Name
> Cyber Sharks

<!-- ## Table of Contents

- [Your Product Name](#your-product-name)
  - [Table of Contents](#table-of-contents)
  - [Mission Statement](#mission-statement)
  - [Features](#features)
    - [Summary](#summary)
    - [Users](#users)
    - [Sticky Notes](#sticky-notes)
    - [Collections](#collections)
    - [Pages/Endpoint Functionality](#pagesendpoint-functionality)
    - [Nice To Haves](#nice-to-haves)
  - [Technical Implementation](#technical-implementation)
    - [Back-End](#back-end)
    - [Front-End](#front-end)
    - [Git \& Deployment](#git--deployment)
  - [Target Audience](#target-audience)
  - [Back-end Implementation](#back-end-implementation)
    - [API Specification](#api-specification)
    - [Object Definitions](#object-definitions)
      - [Users](#users-1)
      - [Sticky Notes](#sticky-notes-1)
    - [Database Schema](#database-schema)
  - [Front-end Implementation](#front-end-implementation)
    - [Wireframes](#wireframes)
    - [Logo](#logo)
    - [Colours](#colours)
      - [Primary](#primary)
      - [Secondary](#secondary)
    - [Font](#font) -->


## Mission Statement

Empowering growth by connecting role models and opportunities in tech through a platform for collaboration and inclusivity.

## Features

### Summary
The web app will connect diverse individuals to panels and speaking opportunities by allowing:
- Profiles for speakers to showcase their experience and expertise
- Organizers to search and filter profiles effectively
- A user-friendly platform that balances accessibility and professionalism

### Users

| Type | Access | Role Type Assignment |
|------|---------|---------------------|
| Superuser/Admin | - Login, logout, and full profile management<br>- Verify and delete inactive profiles<br>- Update platform content<br>- Manage user accounts<br>- Access admin dashboard | Platform managers and administrators |
| Individual User | - Create and update personal profiles<br>- Claim or request profile deletion<br>- Login and logout<br>- Filter and search profiles | Role models, diverse professionals seeking opportunities |
| Guest User | - View profiles<br>- Search profiles but cannot contact without an account | Event organizers and general users exploring profiles |

### Collections

| Feature | Access | Notes/Conditions |
|---------|---------|-----------------|
| Profile Information | Admin, User | Name, title, role, specialization, experience levels (technical and speaking), location, bio, and contact |
| Profile Management | Admin, User | Profiles can be created by individuals or by nomination. Inactivity may lead to automatic deactivation |
| Search and Filter | Guests, Admin, User | Filter by specialization, location, experience levels |
| Profile Claiming | Admin, User | Users can claim a profile if created by someone else. Stretch goal for MVP |

### Pages/Endpoint Functionality

| Endpoint/Page | Functionality | Comments |
|--------------|---------------|-----------|
| Homepage | - Introduction to the platform<br>- Create profile<br>- Carousel of featured profiles<br>- Search and filter functionality | Responsive design for desktop-first users |
| Profiles | - Individual profiles with detailed information<br>- Continuous scroll for browsing profiles<br>- Search and filter functionality | Key feature of the MVP |
| Profile | - Display detailed speaker information<br>- Provide a "Contact Speaker" option (requires login)<br>- Allow users to search and filter profiles<br>- Allow guests to view profiles but restrict contacting | Key feature of the MVP. Profiles are searchable and filterable |
| Create profile | - Provide a form for users to input their details<br>- Allow admins to create or edit profiles for others<br>- Save profiles to the database<br>- Validate inputs | Users can update their profiles after creation |
| Signup Page | - Enable new user registration<br>- Validate email format and passwords<br>- Include CAPTCHA (optional)<br>- Redirect users to create profile | Email should be mandatory to activate an account |
| Admin Dashboard | - Manage all user and profile data<br>- Delete inactive profiles | Admin access only |
| Login/Signup | - Create accounts<br>- Manage login/logout | Required for contacting profiles |
| Profile Management | - Users can create and update their profiles<br>- Admin can verify or delete profiles | Separate profile creation from account creation |

### Nice To Haves

- Profile likes and connection counts
- Animations for improved user experience
- Responsive design for mobile use
- Claim profiles feature
- Allow guests to view profiles without contact access

## Technical Implementation

### Back-End

- Django / DRF API
- Python

### Front-End

- React / JavaScript
- HTML/CSS

### Git & Deployment
- Heroku
- Netlify
- GitHub

This application's back-end will be deployed to Heroku. The front-end will be deployed separately to Netlify.
 
We will also use Insomnia to ensure API endpoints are working smoothly (we will utilise a local and deployed environment in Insomnia).

## Target Audience

Our platform serves two primary audience segments:

**Primary Audience:**
- Event organisers in the tech industry looking for women speakers and role models in tech
- Women in tech or transitioning into tech roles, seeking speaking opportunities, and expand their network
- Students and minority folks looking for inspiration and role models

**Secondary Audience:**
- Professionals seeking to build their personal brand and expand their professional network
- Students and early career professionals exploring tech career paths

### User Personas
| Persona | Name | Occupation | Goals | Challenges | Preferred Features | Quote |
|---------|------|------------|--------|------------|-------------------|--------|
| Guest/Student/Community Member | Priya Kapoor, 24 | Software Engineering Student | • Discover relatable role models in tech.<br>• Learn about different career paths and specialisations.<br>• Build confidence in pursuing a tech career. | • Lack of access to diverse representation in the tech industry.<br>• Uncertainty about which specialisation to pursue. | • Browse functionality for profiles and success stories.<br>• Insights into career paths.<br>• Role models with relatable journeys. | *"I want to explore tech career options and find role models who inspire me."* |
| Speaker/Role Model | Emily Carter, 37 | AI Research Scientist | • Build a personal brand as an expert in the tech industry.<br>• Inspire and mentor women in tech.<br>• Be discovered for speaking opportunities. | • Limited time to manage outreach opportunities.<br>• Difficulty showcasing expertise effectively online. | • Profile creation and editing tools.<br>• Privacy controls for contact preferences.<br>• Easy-to-use interface for highlighting expertise. | *"I want to inspire others while continuing to grow my professional network."* |
| Event Organiser | Camila Smith, 42 | Event Coordinator at TechTechy | • Find diverse, qualified speakers for tech events.<br>• Streamline the speaker selection process.<br>• Ensure a professional and engaging event experience. | • Difficulty finding speakers with specific expertise.<br>• Limited time for manual searches and outreach. | • Advanced search filters (e.g., expertise, location).<br>• Detailed speaker profiles with professional backgrounds.<br>• Contact tools for outreach | *"I want to ensure our events feature speakers who inspire and engage the audience."* |

<!-- ## Back-end Implementation
### API Specification

| HTTP Method | URL                                 | Purpose                                                                                                                                  | Request Body                                                                                                       | Successful Response Code | Authentication and Authorization                      |
| :---------- | :---------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------- | :----------------------- | :---------------------------------------------------- |
| POST        | /login                              | Allow users to log in                                                                                                                    | ““Username”:”string”, “password”:”string”                                                                          | 200                      | Token auth                                            |
| POST        | /logout                             | Allow users to log out ( end active session)                                                                                             | ““Username”:”string”, “password”:”string”                                                                          | 200                      | Will clear user log in session \- remove stored token |
| POST        | /Register                           | Create new student or approver user                                                                                                      | “Username”:”string”, “FullName”: “string” “Email”:”string”,”Password”:”string”, ”Password2”:”string”,              | 201                      | Admin                                                 |
| PUT         | /Profile/ID                         | Edit user                                                                                                                                | “Username”:”string”, “FullName”: “string” “Email”:”string”, “Avatar”:”string”,  “Bio”:”string”, “Socials”:”string” | 200                      | Admin, approver or student with matching ID           |
| GET         | /Profile/ID                         | View User profile                                                                                                                        | NA                                                                                                                 | 200                      | Any                                                   |
| DELETE      | /User/ID                            | Delete user                                                                                                                              | NA                                                                                                                 | 204                      | Admin, approver or student with matching ID           |
| POST        | /EventCollection                    | Create new Event Collection                                                                                                              | “Title”:”string”, “IsExported”:”boolean” “Approver”: integer                                                       | 201                      | Admin                                                 |
| PUT         | /EventCollection/Id                 | Update Event collection                                                                                                                  | “Title”:”string”, “IsExported”:”boolean”                                                                           | 200                      | Admin, Approver linked to event?                      |
| DELETE      | /EventCollection/Id                 | Delete Event collection                                                                                                                  | NA                                                                                                                 | 204                      | Admin                                                 |
| POST        | /EventBoard/                        | Create new Event board                                                                                                                   | “Title”: “string”, “StartDate”:”datetime”, “EndDate:”datetime”                                                     | 201                      | Admin, approvers                                      |
| PUT         | /EventBoard/ID                      | Update Event board                                                                                                                       | “Title”: “string”, “StartDate”:”datetime”, “EndDate:”datetime”                                                     | 200                      | Admin, approvers                                      |
| DELETE      | /EventBoard/ID                      | Delete Event board                                                                                                                       | NA                                                                                                                 | 204                      | Admin or author of event                              |
| GET         | /EventBoard/ID                      | Get Event board details                                                                                                                  | NA                                                                                                                 | 200                      | Open access                                           |
| POST        | /stickyNote/                        | Create a new sticky note as Guest user                                                                                                   | “WinComment”:”string”                                                                                              | 201                      | Open access                                           |
| GET         | /stickyNotes/?Status=Live\&Event.ID | Get Sticky notes for an event  Use query params to filter by event ID and Status                                                         | NA                                                                                                                 | 200                      | Open access                                           |
| GET         | /stickyNotes/?Event.ID              | Get Sticky notes for an event                                                                                                            | NA                                                                                                                 | 200                      | Admin, approvers                                      |
| GET         | /stickyNotes/                       | Export sticky notes as CSV (eg:response.setContentType("text/csv")) Can optionally filter by: event ID, Status, isexported, collectionId | NA                                                                                                                 | 200                      | Admin                                                 |
| PUT         | /stickyNotes/ID                     | Edit sticky note, update status of sticky note to Approved or Archived                                                                   | “WinComment”:”string”                                                                                              | 200                      | Admin, approvers                                      |
| POST        | /StickyStatus                       | Create available statuses for stickyNotes                                                                                                | “StatusName”:”string”                                                                                              | 201                      | Admin                                                 |
| GET         | /StickyStatus                       | Get all statuses                                                                                                                         | NA                                                                                                                 | 200                      | Admin                                                 |

### Object Definitions

> [!NOTE]  
> Define the actual objects that your API returns. The example GET method above says it returns “all projects”, so we need to define what a “project” looks like. Example below.

#### Users
| Field              | Data type |
| :----------------- | :-------- |
| *User\_ID (PK)*    |           |
| *Username*         | string    |
| FullName           | string    |
| *Email*            | string    |
| *Password*         | string    |
| *Password2*        | string    |
| Auth\_ID (FK)      | integer   |
| StickyNoteId (FK)  | integer   |
| Event\_Id (FK)     | integer   |
| Collection\_Id(FK) | integer   |
| Avatar             | string    |
| Bio                | string    |
| SocialLink         | string    |

#### Sticky Notes
| Field                   | Data Type |
| :---------------------- | :-------- |
| Sticky\_ID (PK)         | integer   |
| WinComment              | string    |
| Guest                   | boolean   |
| UserId (FK)             | integer   |
| Event\_Id (FK)          | integrer  |
| Collection\_Id (FK)     | integrer  |
| Sticky\_Status\_ID (FK) | integrer  |

> [!NOTE]  
> ... etc

### Database Schema
> [!NOTE]  
> Insert an image of your database schema (could be a photo of a hand-drawn schema or a screenshot of a schema created using a tool such as ​​https://drawsql.app/). Example below.  -->

<!-- [Our database schema](./img/schema.png) -->

## Front-end Implementation

### Wireframes

<!-- > [!NOTE]  
> Insert image(s) of your wireframes (could be a photo of hand-drawn wireframes or a screenshot of wireframes created using a tool such as https://www.mockflow.com/). -->

See version 1 of Wireframes here - https://excalidraw.com/#room=c17972f48f4322229496,9WDLADVu3hiEHfNN1ABdPA

#### Design Inspiration
![Design Inspiration](./README_images/design-inspiration.png)

#### Wireframes - Version 1
![Wireframe: homepage](./README_images/wireframes.png)

#### Wireframe - HOME
![Wireframe - HOME](./README_images/1-wireframe-home.png)

#### Wireframe - LOGIN
![Wireframe - LOGIN](./README_images/2-wireframe-login.png)

#### Wireframe - SIGNIN
![Wireframe - SIGNIN](./README_images/3-wireframe-signin.png)

#### Wireframe - SHOWING RESULTS
![Wireframe - SHOWING RESULTS](./README_images/4-wireframe-showingResults.png)

#### Wireframe - PROFILE
![Wireframe - PROFILE](./README_images/5-wireframe-profile.png)

#### Wireframe - CREATE PROFILE
![Wireframe - CREATE PROFILE](./README_images/6-wireframe-createProfile.png)

#### Wireframe - ERROR PAGE
![Wireframe - ERROR PAGE](./README_images/7-wireframe-errorPage.png)

#### Wireframe - PAGE NO RESULT
![Wireframe - PAGE NO RESULT](./README_images/8-wireframe-pageNoResult.png)

## User Stories
| User Type | User Stories | Requirements |
|-----------|--------------|--------------|
| Guest | *As a guest, I want to discover diverse role models in tech so that I can be inspired about potential career paths* | • Browse functionality<br>• Featured profiles<br>• Success stories<br>• Career path visibility |
| Guest | *As a guest, I want to learn about different tech specialisations so that I can understand potential career options* | • Specialisation descriptions<br>• Role model experiences<br>• Career path insights<br>• Industry information |
| Guest | *As a guest, I want to sign up easily so that I can personalise my experience and access premium features like direct contact.* | • Clear registration form<br>• Required fields validation<br>• Privacy policy acceptance<br>• Clear indication of mandatory fields |
| Speaker/Role Model | *As a speaker, I want to create and manage profile(s) so that event organisers can find me for speaking opportunities* | • Registration functionality<br>• Profile creation form<br>• Profile editing capability<br>• Required fields validation |
| Speaker/Role Model | *As a speaker/regular user, I want to showcase my areas of expertise so that I can be found for relevant speaking opportunities* | • Specialisation selection<br>• Topics/SME areas input<br>• Experience level indication<br>• Professional background |
| Speaker/Role Model | *As a speaker, I want to manage my contact preferences so that I can be reached appropriately* | • Contact details input<br>• Privacy settings<br>• LinkedIn integration<br>• Contact form preferences |
| Speaker/Role Model | *As a speaker, I want to delete my profile(s) so that I can remove my information from the platform if I'm no longer available for speaking opportunities* | • Profile deletion functionality<br>• Confirmation process / deletion alert<br>• Data removal notification |
| Event Organiser | *As an event organiser, I want to contact potential speakers so that I can discuss speaking opportunities* | • Contact Buttons<br>• Contact mechanism<br>• Professional messaging<br>• Contact privacy<br>• Response tracking |
| Event Organiser | *As an event organiser, I want to search for speakers based on specific criteria so that I can find appropriate speakers for my events* | • Search functionality<br>• Multiple filter options: Name & Location<br>• Experience level filtering |
| Event Organiser | *As an event organiser, I want to browse speaker profiles so that I can evaluate their suitability for my event* | • Profile viewing capability<br>• Detailed information display<br>• Professional background<br>• Speaking history |
| Speaker/Organiser | *As a Speaker/Event Organiser, I want to delete my account so that I can remove all my profiles and information from the platform if I'm no longer interested in speaking opportunities* | • Account deletion functionality<br>• Deletion confirmation steps<br>• Warning about data loss |
| Admin | *As an admin, I want to manage and moderate content so that the platform maintains high quality and professionalism* | • Profile Deletion Functionality<br>• Profile Editing Capability<br>• Account Deletion Functionality<br>• Account Editing Capability<br>• Profile Creation Form<br>• User Creation Form |


### Logo
![](./img/logo.png)

### Colours
#### Primary

![](./img/primary.png)

#### Secondary

![](./img/secondary.png)

### Font

(We will create a ‘highlight-text’ font style in CSS with the glow effect as per the above - to use on hero section)
Raleway
Google fonts:

```css
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap');
font-family: 'Raleway', sans-serif;
```
(When Raleway is not available the standard font to be used is the Calibri font family)

![](./img/fonts.png)