# Dyanmic Components

##Dyanmic Components allows user to add multiple components and create a custom dashboard  with 
  + **Table
  + **Map
  + **Stats
  + **Charts


## Status Bar
  Show some stats ws://ws.weatherflow.com APIs available online
  Status are Implemented using web socket so that its shows real time data everytime on the dashboard.

##chart 2
  With is same data availble through by websocket API chart2 is genrated.So that stats shows the summary and chart shows the real data with respect to time.

##chart1 
For chart in the dynamic componet have an option to upload data.bascically json data format.For this component data is read from the uploaded (.JSON file) and and chart is generated on fly.

# Dyanmic table Component

Dynamic table component is a fully customizable table where users are 
 -Allowed to define the number of columns and columns labels. 
 -Has no restricstion on the number of columns. 
 -Can add rows on demand even after the table is generated.
 -This can be further enhanced to a data grid by adding additional features.


## Features
+ **User define columns and column Names**
+ **Add Row on Demand**
+ **Column level sorting(asec and desc)**
+ **Pagination**


## Dependencies

No dependencies as such, all required libraries are included

## Technologies

### React JS

##User define columns and column Name
At the time of Adding Component ,that is once the user click on the Add Table button is prompted to 
Choose the Number of columns.Once user defines the column numbers,Column Name fields are rendered with
dummy column names.

User acn go ahead and edit these column name fields with their desired column names


##Add Row on Demand
Whenever table is generated one row is added by default ,that is after the column Numbers and Column Name generation when user cliks on Done button.Table is rendered with the one Row.

Once the table is generated on top of the table Add Row button is rendered,
which allows user to Add Row On Demand.

Once the Row is added each cell displays dummy text in cell which user can go ahead and edit.


##Column level sorting(asec and desc)
User can change the sequence of data records,Column level sorting allows user to sort Column data in ascending  and descending order.

##Pagination
 Componet has Pagination for each 50 rows ,if the number of rows cross 50 for that particular table

##Cell editable
  Each cell is editable by default once click on cell the becames editable and allows user to insert Data.
  and on focus out agian cell becomes read only.



##Steps to Run the project
  + **Extract the project folder
  + **Navigate to dynamic-table folder
  + **npm install
  + **npm start