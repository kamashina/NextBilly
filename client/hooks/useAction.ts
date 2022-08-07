import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionsCreators } from '../store/action-creators';


const useAction = () => {
	const dispatch = useDispatch()

	return bindActionCreators(ActionsCreators ,  dispatch)
}

export default useAction
