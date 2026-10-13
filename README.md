project: pulseui
Used:
React 
Javascript
CSS
Vite


Design system:
The project has a tokens.css file to keep the design consistent. Design tokens are shared values, such as colours and spacing, reused in different parts of the project. This makes it easier to change the design without updating every style individually. It also helps keep the dashboard consistent.

tradeoffs :
This prototype utilizes sample data rather than retrieving information from a live database or API. Customer names, account owners, subscription plans, account statuses, and user counts are example values entered directly into the application and do not represent actual customers or current business information. Dashboard figures, including total users, revenue, active projects, and completed tasks, are illustrative values not derived from calculations based on account records; therefore, these figures may not correspond with those in the table. Navigation is managed through React state rather than a comprehensive routing system. Selecting a navigation item updates the displayed content, but each section does not have a unique URL. The Settings section serves as a placeholder, and the Team section displays account-owner information instead of a dedicated team directory. The prototype lacks user authentication, permissions, backend integration, database storage, and real-time updates. Users cannot add, modify, or delete customer records through the interface. These features have been intentionally omitted to maintain focus on dashboard layout, reusable React components, responsive styling, and basic interactions.

Screenshots:
<img width="1627" height="953" alt="Screenshot 2026-10-12 202832" src="https://github.com/user-attachments/assets/483d589d-973b-4a6f-8e06-d16072d04ce4" />
<img width="1581" height="907" alt="image" src="https://github.com/user-attachments/assets/42cc8557-9a66-4b93-94de-248861a15f6d" />
<img width="1805" height="958" alt="image" src="https://github.com/user-attachments/assets/401620ca-46b5-46fc-8a7f-e6f15d76a5ad" />

