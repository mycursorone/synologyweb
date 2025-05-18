#!/usr/bin/env python3

import asyncio
import socket
import time

async def test_writelines():
    # Create a server socket
    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server.bind(('127.0.0.1', 0))  # Bind to a random port
    server.listen(1)
    server_addr = server.getsockname()
    
    # Create a client connection
    transport, protocol = await asyncio.get_event_loop().create_connection(
        lambda: asyncio.Protocol(), '127.0.0.1', server_addr[1])
    
    # Accept the connection on the server side
    client, _ = server.accept()
    client.setblocking(False)
    
    # Generate some data (10MB)
    data = b'x' * 1024 * 1024  # 1MB
    list_of_data = [data] * 10  # 10MB total
    
    print(f"Buffer size before: {transport.get_write_buffer_size()}")
    
    # Write data using writelines
    transport.writelines(list_of_data)
    
    print(f"Buffer size after: {transport.get_write_buffer_size()}")
    print(f"Protocol paused: {transport._protocol_paused}")
    
    # Clean up
    transport.close()
    client.close()
    server.close()

asyncio.run(test_writelines())
