import { PlusSquare } from "lucide-react";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const AddResume = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [resumetitle,setresumetitle]= useState()
  return (
    <div>
      <div
        className="p-14 py-24 border items-center flex justify-center
       bg-secondary rounded-lg"
        onClick={() => setOpenDialog(true)}
      >
        <PlusSquare />
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <p>Add a title for your new resume</p>
            <DialogDescription>
              <Input placeholder="Ex.Software Developer Resume" />
            </DialogDescription>
            <div className="flex justify-end gap-5">
              <button onClick={() => setOpenDialog(false)} variant="ghost">
                Cancel
              </button>
              <button>Create</button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddResume;
