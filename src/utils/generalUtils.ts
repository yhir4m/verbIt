const generalUtils = {

    launchModal : (modalId:string , launchClass:string)=>{    
        const modal = document.getElementById(modalId);
        if(modal?.classList.contains(launchClass)){
            modal.classList.remove(launchClass);
            return
        }
        modal?.classList.add(launchClass);
        return;
    }
};

export default generalUtils;