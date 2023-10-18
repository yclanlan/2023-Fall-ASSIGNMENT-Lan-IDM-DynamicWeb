import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './calendar.css'

function App() {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [inputEvent, setInputEvent] = useState('');
  const [startTime, setStartTime] = useState('00:00');
  const [endTime, setEndTime] = useState('00:30'); 
  const [editingEvent, setEditingEvent] = useState(null); 

  // 日期變更
  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  // 新增事件
  const handleAddEvent = () => {
     // 創建新事件物件
    if (inputEvent && startTime && endTime) {

      const newEvent = {
        id: new Date().getTime(),
        date: date.toDateString(),
        content: inputEvent,
        startTime,
        endTime,
      };

      // 更新事件狀態
      setEvents((prevEvents) => [...prevEvents, newEvent]);
      setInputEvent('');
      setStartTime('00:00');
      setEndTime('00:30');
      console.log('NEW EVENT!')
      console.log(newEvent);

    }
  };

  // 處理編輯事件
  const handleEditEvent = (eventId) => {
    // 找到要編輯的事件
    const eventToEdit = events.find((event) => event.id === eventId);
    if (eventToEdit) {
      setEditingEvent(eventToEdit);
    }
  };

  // 處理刪除事件
  const handleDeleteEvent = (eventId) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== eventId));
  };

  // 保存編輯後的事件
  const handleSaveEdit = (editedEvent) => {
    // 更新事件狀態，保存編輯後的事件
    setEvents((prevEvents) =>
      prevEvents.map((event) => (event.id === editedEvent.id ? editedEvent : event))
      
    );
    console.log('Editing saved!');
    console.log(editedEvent);
    setEditingEvent(null); 
  };
  // 取消編輯事件
  const handleCancelEdit = () => {
    setEditingEvent(null); 
  };

  // 自定義日曆tile內容
  const customTileContent = ({ date, view }) => {
    if (view === 'month') {
      const dateKey = date.toDateString();
      const dateEvents = events.filter((event) => event.date === dateKey);
      if (dateEvents.length > 0) {

        return (
          <>
          <br/>
          <ul>
            {dateEvents.map((event) => (
              <li key={event.id}>
                <div className="event-div">
                  <span className="event-title" >{event.content}</span>
                  <br />
                  <span className="event-time" >Start: {event.startTime}</span>
                  <br />
                  <span className="event-time" >End: {event.endTime}</span>
                  <br />

                    <div className="eventButtonDiv">
                    <button className="eventButton" 
                    onClick={() => handleEditEvent(event.id)}>Edit </button>
                    &nbsp;
                    <button className="eventButton" 
                    onClick={() => handleDeleteEvent(event.id)}>Delete</button>
                    </div>
                  <hr/>
                </div>
              </li>
            ))}
          </ul>

          </>
        );
      }
    }
    return null;
  };

  return (

  <div className="App">
          <div className="Left-Panel">
            <h1>Todo List with Custom Calendar</h1>

            <div className="events-container">
                {editingEvent ? (
                  // ****** when editing the event ******
                  <div className="editing-event">
                    <h3> Editing </h3> 
                    <hr style={{border:"solid 1px"}}/> 
                    <h1>{date.toDateString()}</h1>
                    <h4>Title :&nbsp;</h4>
                    <input
                      type="text"
                      placeholder="Edit Event Name"
                      value={editingEvent.content}
                      onChange={(e) =>
                        setEditingEvent({ ...editingEvent, content: e.target.value })
                      }
                    />
                    <br/>
                    <br/>
                    <h4>Time :&nbsp;</h4>
                    from&nbsp;
                    <input
                      type="time"
                      value={editingEvent.startTime}
                      onChange={(e) =>
                        setEditingEvent({ ...editingEvent, startTime: e.target.value })
                      }
                    />

                  
                    <br/>
                    
                    to&nbsp;
                    <input
                      type="time"
                      value={editingEvent.endTime}
                      onChange={(e) =>
                        setEditingEvent({ ...editingEvent, endTime: e.target.value })
                      }
                    />
                    <br/>
                    <br/>
                    <button className="editingButton" onClick={() => handleSaveEdit(editingEvent)}>Save</button> &nbsp;
                    <button className="editingButton" onClick={handleCancelEdit}>Cancel</button>
                    <br/><br/><br/>
                  </div>
                ) : (

                  // ***** normal adding mode *****
                  <div className="adding-event">
                  <h3> Events for </h3> 
                  <hr style={{border:"solid 1px"}}/>
                  <h1>{date.toDateString()}</h1>
                    
                    <h4>Title :&nbsp;</h4>
                    <input
                      type="text"
                      placeholder="Add an event"
                      value={inputEvent}
                      onChange={(e) => setInputEvent(e.target.value)}
                    />
                    <br/>
                    <br/>

                    <h4>Time :&nbsp;</h4>
                    from&nbsp;
                    <input
                      type="time"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                    />
                  
                    <br/>

                    to&nbsp;
                    <input
                      type="time"
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                    />

                    <br/><br/>
                    <button className="addEventButton"onClick={handleAddEvent}>Add Event</button>
                    <br/><br/><br/>
                  </div>
                )}
            </div>
          </div>

          <div className="Right-Panel">
          {/* calendar  */}
          <div className="calendar-container">
            <Calendar 
            value={date} 
            onChange={handleDateChange} 
            tileContent={customTileContent} />
          </div>
          <br/>
          </div>
  </div>
  );
}

export default App;
