import { useEffect, useState } from "react";
import { getConversations } from '../REST/conversations';
import { ListGroup} from "react-bootstrap";
import { ListItem } from "../components";
import SearchForm from "../components/SearchForm";

const ConversationList = () => {
  const [conversation, setConversation] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadConversations()
  }, []);

  function loadConversations() {
    try {
      getConversations().then((data) => setConversation(data?.data))
    } catch (error) {
      console.log('Load Articles error:', error)
    }
  }

  const conversationsMap = conversation.filter(
    conversation=>conversation?.attributes?.Theme.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
  ).map((conversation) => {
    return <ListItem 
              key={conversation?.id} 
              id={conversation?.id} 
              Title={conversation?.attributes?.Theme} 
              Body={conversation?.attributes?.Body}
            >
            </ListItem>
  })

  
  return (
    <>
      <SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <h1>Список обговореннь</h1>
      <div>
        <ListGroup variant="flush">{conversationsMap}</ListGroup>
      </div>
    </>
  )
}

export default ConversationList;
