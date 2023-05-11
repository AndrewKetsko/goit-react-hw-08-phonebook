import React, { useEffect } from 'react';
import ContactEl from './ContactEl';
import { Element, List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../../Redux/query';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  // const isLoading = useSelector(state => state.contacts.isLoading);
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      {/* {isLoading && <p>Is Loading</p>} */}
      <List>
        {contacts
          .filter(contact => {
            return contact.name.toLowerCase().includes(filter);
          })
          .map((contact, index) => {
            return (
              <Element
                key={contact.id}
                style={{
                  backgroundColor: index % 2 === 0 ? 'lightgrey' : 'white',
                }}
              >
                <ContactEl contact={contact} />
              </Element>
            );
          })}
      </List>
    </>
  );
}
