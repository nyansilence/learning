'use client';

import { FC, useEffect } from 'react';
import io from 'socket.io-client';
interface ISocketClientProps   {
}

const SocketClient: FC<ISocketClientProps> = ({  }) => {
  useEffect(() => {
    const socket = io('ws://nginx');

    socket.on('connect', () => {
      console.log('connected');
    });

    socket.on('my-name-is', (serverName) => {
      console.log(`connected to ${serverName}`);
    });

    socket.on('disconnect', (reason) => {
      console.log(`disconnected due to ${reason}`);
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <>
      <div>Socket Client</div>
    </>
  );
};

SocketClient.displayName = 'SocketClient';

export default SocketClient;
