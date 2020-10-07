### React Advanced Notify

Simple yet powerful way to notify toaster message

Currently this component supports:
1. Auto Close Based on TimeSet
2. Success and Failure different color
3. Configurable message

Future Plans:
1. Icon included based on your prefrences
2. History of notification shown

Setup Guide:
`npm install --save react-advanced-notify`
```js
import React from 'react';
import Notifications, {showToast} from './components/notifications';
import './App.css';

function App() {
  let triggerToaster = () => {
    showToast('User Info Saved Successfully', 'Failed', 9000, 'bottomright');
  }
  return (
    <div className="App"><div><div style={{'cursor': 'pointer'}} onClick={()=>triggerToaster()}>Click Me for Notification! </div><br />
    Website contents Goes here... Website contents Goes here... Website contents Goes here...
    Blah Blah Blah
    </div><Notifications></Notifications>
     </div>
  );
}
export default App;
```
