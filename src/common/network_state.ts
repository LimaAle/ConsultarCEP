import * as Network from 'expo-network';
export async function network_state() {

  let isOff=	Network.getNetworkStateAsync;
  let status=true;
  if(!(await isOff()).isInternetReachable){
    status= false;
  }else{
    status= true;
  }
  return status
}