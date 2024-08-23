'use client'
import { PlusCircleIcon } from "lucide-react"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation";


function PlaceholderDocument() {
  const router = useRouter();
  const handleClick = () => {

    router.push("/dashboard/upload");

  };
  return (
    <Button onClick={handleClick} className="flex flex-col items-center justify-center w-64 h-80
    rounded-xl drop-shadow-md text-indigo-400 bg-indigo-100">
        <PlusCircleIcon className="h-16 w-16" />
        <p>
            Add a Document
        </p>
    </Button>
  )
}

export default PlaceholderDocument