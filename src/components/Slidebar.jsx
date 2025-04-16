import { useState } from 'react';
import './Slidebar.css';
 function Slidebar({ recentTasks, onRecentClick }) {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const handleRefresh = () => window.location.reload();

  return (
    <div className='slidebar'>
      <div className='top-section'>
        <div className='threedot' onClick={toggle}>
          <img src="https://img.icons8.com/?size=100&id=08lCwdn1EW8r&format=png&color=000000" alt="" style={{height:'25px', width:'30px',cursor:'pointer'}} />
        </div>
        <div className='newchat' onClick={handleRefresh}>
          <img src="https://img.icons8.com/?size=100&id=3220&format=png&color=000000" alt="+" style={{height:'15px', width:'15px', margin:'2.5px'}} />
          {isOpen && <h3>New Chat</h3>}
        </div>
        <div className='recent'>{isOpen && <h3>Recent</h3>}</div>

        <div className='recent-task'>
          {isOpen && (
            <ul>
              {recentTasks.map((task, index) => (
                <li key={index} onClick={() => onRecentClick(task)} style={{ cursor: 'pointer' }}>
                <img src="https://img.icons8.com/?size=100&id=uahnNrfVSUxR&format=png&color=000000" alt="message" style={{height:'20px', width:'20px', padding:"6px 5px 0px 0px"}} />  {task}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className='bottom-section'>
      <div className='help'>
          <img src="https://img.icons8.com/?size=100&id=646&format=png&color=000000" alt="?" style={{height:'15px', width:'15px', margin:'2.5px'}} />
          {isOpen && <h3>Help</h3>}
        </div>
        <div className='activity'>
          <img src="https://img.icons8.com/?size=100&id=86125&format=png&color=000000" alt="?" style={{height:'15px', width:'15px', margin:'2.5px'}} />
          {isOpen && <h3>Activity</h3>}
        </div>
        <div className='setting'>
          <img src="https://img.icons8.com/?size=100&id=H6C79JoP90DH&format=png&color=000000" alt="?" style={{height:'15px', width:'15px', margin:'2.5px'}} />
          {isOpen && <h3>Settings</h3>}
        </div>
      </div>
    </div>
  );
}

export default Slidebar;
