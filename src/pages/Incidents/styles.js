import { StyleSheet } from 'react-native';
import Constant from 'expo-constants';
export default StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 24,
		marginTop: Constant.statusBarHeight + 10
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	headerText: {
		fontSize: 15,
		color: '#737380'
	},
	headerTextBold: {
		fontWeight: 'bold'
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		marginTop: 16,
		marginBottom: 28,
		color: '#13131a'
	},
	description: {
		fontSize: 16,
		lineHeight: 24,
		color: '#737380'
	},
	incidentList: {
		marginTop: 32
	},
	incident: {
		padding: 24,
		borderRadius: 8,
		backgroundColor: '#fff',
		marginBottom: 16
	},
	incidentProperty: {
		fontSize: 14,
		fontWeight: 'bold',
		color: '#41414d'
	},
	incidentValue: {
		marginTop: 8,
		marginBottom: 24,
		color: '#737380',
		fontSize: 15
	},
	detailsButton: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	detailsButtonText: {
		fontWeight: 'bold',
		fontSize: 15,
		color: '#E02041'
	}
});
