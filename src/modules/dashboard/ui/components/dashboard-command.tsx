import {
    CommandInput,
    CommandItem,
    CommandList,
    CommandRespnsiveDialog
} from "@/components/ui/command";

import {Dispatch, SetStateAction} from "react";

interface Props {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

export const DashboardCommand = ({open, setOpen}:Props) =>{
    return (
        <CommandRespnsiveDialog open={open} onOpenChange={setOpen}>
            <CommandInput
            placeholder="Finding meeting or agent"
            />
            <CommandList>
                <CommandItem>
                    test
                </CommandItem>
            </CommandList>
        </CommandRespnsiveDialog>
    )
};