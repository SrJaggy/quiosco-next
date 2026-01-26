"use client"
import { Product } from '@/src/generated/prisma/client'
import { useStore } from '@/src/store'


type AddtoProductButtonProps = {
    product : Product
}



export default function AddtoOrderButton({product }: AddtoProductButtonProps) {

    const addToOrder = useStore((state) => state.addToOrder)

  return (
    <button
        type="button"
        className="bg-indigo-600 hover:bg-indigo800 text-white w-full mt-5 p-3 uppercase font-bold cursos-pointer"
        onClick={()=> addToOrder(product)}
    >
        Agregar
    </button>
  )
}
