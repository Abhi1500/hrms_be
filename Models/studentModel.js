exports.createStudent = (obj)=>{
  
    return {
            name:obj.name,
            last:obj.last,
            roll_no:obj.roll_no,
            registration_no: obj.registration_no,
            father_name: obj.father_name,
            krId:obj.krId,
            mother: obj.mother,
            phon_no:obj.phon_no,
            address_1: obj.address_1,
            address_2: obj.address_2,
            city: obj.city,
            state: obj.state,
            pin:obj.pin,
            dob : obj.dob,
            email:obj.email,
            category : obj.category,
            class :obj.class,
            section: obj.section,
            concession:obj.concession,
            additional: obj.additional 
    }
}