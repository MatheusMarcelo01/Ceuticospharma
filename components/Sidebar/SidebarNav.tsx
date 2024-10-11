import { Stack } from "@chakra-ui/react";
import { NavSection } from "./NavSection";
import { NavLink } from "./NavLink";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export function SidebarNav() {
    return(
        <Stack spacing="12" align="flex-start">
                <NavSection title="GERAL">
                <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
                <NavLink icon={RiContactsLine} href="/users/userList">Usuários</NavLink>
                </NavSection>
                <NavSection title="PRODUTOS">
                <NavLink icon={RiInputMethodLine} href="/produtcs">Produtos</NavLink>
                <NavLink icon={RiGitMergeLine} href="/offer">Ofertas</NavLink>
 
                </NavSection>
            </Stack>
    );
}

