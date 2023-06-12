import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import Link from "next/link";
import React from "react";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const json = await response.json();

  return {
    props: { users: json },
  };
};

const Nested = ({ users }) => {
  console.log(users);
  return (
    <div>
      <List>
        {users &&
          users.map((user) => {
            return (
              <Link href={`nested/${user.id}`} key={user.id}>
                
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={user.name} />
                  </ListItemButton>
                </ListItem>
              </Link>
            );
          })}
      </List>
    </div>
  );
};

export default Nested;
