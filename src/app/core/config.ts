import { environment } from '../../environments/environment'; 
export const config = {
  baseApiURL: environment.baseApiURL,
  organization: environment.organization,
  genders: ['Male', 'Female', 'Others'],
  userRoles: ['Director','Instructor', 'Player', 'DBA'],
  retrievedSuccess: 'retrieved successfully',
  retrievedError: 'retrieved failed',
  addedSuccess: 'inserted successfully',
  additionError: 'insertion failed',
  updatedSuccess: 'updated successfully',
  updationError: 'updation failed',
  deletedSuccess: 'deleted successfully',
  deletionError: 'deletion failed',
  pageLength: 5,
  pageSize: 10,
  pageSizeOptions: [25, 50, 100]

}

