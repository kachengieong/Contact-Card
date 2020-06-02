import React, {Component} from 'react';
import './App.css';
import ContactCard from './ContactCard';

class App extends Component {
  render() {
    return (
      <>
      <ContactCard 
        name="Joe"
        mobile="9292225555"
        work="2126661111"
        email="joe123@gmail.com"
       />
       <ContactCard 
        name="Mary"
        mobile="7183331234"
        work="6461452888"
        email="mary017@yahoo.com"
       />
       <ContactCard
        name="Tom"
        mobile="6462003720"
        work="1789658430"
        email="tom417@outlook.com"
       />
      </>
      )
  }
  
}
export default App;
