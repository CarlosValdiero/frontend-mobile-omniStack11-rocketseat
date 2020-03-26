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
	detailsButton: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	incident: {
		padding: 24,
		borderRadius: 8,
		backgroundColor: '#fff',
		marginBottom: 16,
		marginTop: 48
	},
	incidentProperty: {
		fontSize: 14,
		fontWeight: 'bold',
		color: '#41414d',
		marginTop: 24
	},
	incidentValue: {
		marginTop: 8,
		color: '#737380',
		fontSize: 15
	},
	contactBox: {
		padding: 24,
		borderRadius: 8,
		backgroundColor: '#fff',
		marginBottom: 16
	},
	heroTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		lineHeight: 30,
		color: '#13131a'
	},
	heroDescription: {
		fontSize: 16,
		color: '#737380',
		marginTop: 16
	},
	actions: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 16
	},
	action: {
		backgroundColor: '#e02041',
		padding: 8,
		height: 50,
		width: '48%',
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center'
	},
	actionText: {
		color: '#fff',
		fontSize: 15,
		fontWeight: 'bold'
	}
});
