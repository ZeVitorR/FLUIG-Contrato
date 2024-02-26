function afterTaskComplete(colleagueId,nextSequenceId,userList){
	if(nextSequenceId == 3){
		hAPI.setCardValue("verificar", "0")
	}else if(nextSequenceId == 41){
		hAPI.setCardValue("verificar", "1")
	}
}