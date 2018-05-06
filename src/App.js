import React, { Component } from 'react';

import GuestList from './GuestComponents/GuestList';
import Counter from './CounterComponents/Counter'

class App extends Component {

  state = {
    is_filtred: false,
    addingGuest: "",
    guests: [],
  };

  lastId = 0;
  newGuestID = (property, id)=>{
    id = this.lastId;
    this.lastId++;
    return id;
  }

  filter_geuest = () => {this.setState({is_filtred:!this.state.is_filtred})};
  get_totalInvited = () => { return this.state.guests.length };
  get_attendingGuests = () => { return this.state.guests.filter(guest => guest.is_confirmed).length };
  get_uncofirmedGuests = () => { return this.state.guests.filter(guest => !guest.is_confirmed).length };

  toggle_guestProperty = (property, indexToChange) => {
    this.setState({
      guests: this.state.guests.map((guest, index)=>{
        if (indexToChange === guest.id){ 
          return  {
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest;
      })
    })
  };

  toggle_isConfirmed = index => {this.toggle_guestProperty('is_confirmed', index)};

  toggle_isEditing = index => {this.toggle_guestProperty('is_editing', index)};

  setName = (txt, indexToChange)=>{
    this.setState({
      guests: this.state.guests.map((guest)=>{
        if (indexToChange === guest.id){ 
          return  {
            ...guest,
            name: txt
          };
        }
        return guest;
      })
    })
  }

  handle_nameInput = (e) => {this.setState({addingGuest: e.target.value})}

  addName = (e) => {
    e.preventDefault();
    this.setState({
      guests:[
        {
          name: this.state.addingGuest, is_confirmed:false, is_editing:false, id: this.newGuestID()
        },
        ...this.state.guests
    ],
    addingGuest: ''
    })
  }

  remove_user = (matchedIndex) => {
      this.setState({

        guests: this.state.guests.filter(
          (guest) => { if(guest.id !== matchedIndex) {return guest;} }
        )

      });
  }

  render(){
    return (
      <div className="App">
      <header>
        <form>
          <input type="text" placeholder="Invite Someone" 
            onChange={this.handle_nameInput} value={this.state.addingGuest}/>
          <button type="submit" onClick={this.addName} value="submit">Submit</button>
        </form>
      </header>
      <div className="main">
        <div>
          <h2>Invitees</h2>
          <label>
            <input type="checkbox" onChange={this.filter_geuest}/> Hide those who haven't responded
          </label>
        </div>
        <Counter attending={this.get_attendingGuests()}
          total={this.get_totalInvited()}
          uncofirmed={this.get_uncofirmedGuests()}
        />
        <GuestList guests={this.state.guests} 
          toggle_confirm={this.toggle_isConfirmed} 
          toggle_edit={this.toggle_isEditing}
          handle_remove={this.remove_user}
          setName={this.setName}
          is_filtred = {this.state.is_filtred}
          addingGuest={this.state.addingGuest}/>
      </div>
    </div>
    );
  }

}

export default App;
