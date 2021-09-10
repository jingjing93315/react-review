import {useState, useEffect} from 'react'

const ChatAPI = {}
function FriendStatus(props){
  const isOnline = useFriendStatus(props.friend.id)

  if(isOnline === null){
    return 'Loading...'
  }
  return isOnline ? 'Online': 'Offline'
}




function useFriendStatus(friendID){
  const [isOnline, setIsOnline] = useState(null)
  useEffect(() => {
    function handleStatusChange(status){
      setIsOnline(status.isOnline)
    }
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange)
    return () => {
      ChatAPI.unsubscribeToFriendStatus(friendID, handleStatusChange)
    };
  });
  return isOnline

}


function FriendListItem(props){
  const isOnline = useFriendStatus(props.friend.id)
  return (
    <li style={{color: isOnline ? 'green': 'black'}}>
      {props.friend.name}
    </li>
  )
}




const friendList = [
  {
    id: 1, name: 'Phoebe'
  },
  {
    id: 2, name: 'Rachel'
  },
  {
    id: 3, name: 'Ross'
  },
]

function ChatRecipientPicker(){
  const [recipientID, setRecipientID] = useState(1)
  const isRecipientOnline = useFriendStatus(recipientID)

  return (
    <>
      <Circle color={isRecipientOnline ? 'green': 'red'} />
      <select 
        value={recipientID}
        onChange={e=> setRecipientID(Number(e.target.value))}>
          {
            friendList.map(friend=>(
              <option key={friend.id} value={friend.id}>
                {friend.name}
              </option>
            ))
          }
      </select>
    </>
  )
}