
import express from "express";

const router = express.Router();

const crud = [
    {
      create: "API CREATED",
      read: "API READ",
      update: "API UPDATE",
      delete: "API DELETE",
    },
    {
        create: "API CREATED",
        read: "API READ",
        update: "API UPDATE",
        delete: "API DELETE",
      }
];

router.get('/',(req,res)=> {
    res.send(crud);
});
router.post('/',(req,res)=>{
    const newCrud = req.body;
    crud.push(newCrud);
res.send(newCrud);

});
export default router;