import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerContent,
    Icon,
    useDisclosure
} from "@chakra-ui/core";

export default function SidebarDrawer( { children }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
        <div className='drawer'>
            <Icon name="arrow-right" ref={btnRef} variantColor="teal" onClick={onOpen}>
                Open
            </Icon>
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerContent>

                    <DrawerBody>

                        {children}

                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </div>
    );
}