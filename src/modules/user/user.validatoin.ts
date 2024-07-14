import { optional, z } from 'zod';

const usevalidatoinSchema = z.object({
   
    password:z.string().max(20,{message:"password can not be less than 20 characters"}).optional()
   
  
})

export const usevalidatoin ={
    usevalidatoinSchema
}