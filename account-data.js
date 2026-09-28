// MahaCollege - account-scoped favorites and prediction history
// Data is stored in Supabase and belongs to the currently logged-in auth user.
(function(){
  async function currentUser(){
    if(!window.supabaseClient) return null;
    const {data,error}=await window.supabaseClient.auth.getUser();
    if(error) throw error;
    return data.user || null;
  }

  window.MahaAccount = {
    async getUser(){ return currentUser(); },

    async getFavorites(){
      const user=await currentUser(); if(!user) return [];
      const {data,error}=await window.supabaseClient.from('favorite_colleges').select('college_id').eq('user_id',user.id).order('created_at',{ascending:true});
      if(error) throw error;
      return (data||[]).map(x=>String(x.college_id));
    },

    async toggleFavorite(collegeId){
      const user=await currentUser(); if(!user) throw new Error('Please log in first.');
      const id=String(collegeId);
      const {data,error}=await window.supabaseClient.from('favorite_colleges').select('id').eq('user_id',user.id).eq('college_id',id).maybeSingle();
      if(error) throw error;
      if(data){
        const result=await window.supabaseClient.from('favorite_colleges').delete().eq('id',data.id).eq('user_id',user.id);
        if(result.error) throw result.error;
        return false;
      }
      const result=await window.supabaseClient.from('favorite_colleges').insert({user_id:user.id,college_id:id});
      if(result.error) throw result.error;
      return true;
    },

    async removeFavorite(collegeId){
      const user=await currentUser(); if(!user) return;
      const {error}=await window.supabaseClient.from('favorite_colleges').delete().eq('user_id',user.id).eq('college_id',String(collegeId));
      if(error) throw error;
    },

    async clearFavorites(){
      const user=await currentUser(); if(!user) return;
      const {error}=await window.supabaseClient.from('favorite_colleges').delete().eq('user_id',user.id);
      if(error) throw error;
    },

    async getHistory(){
      const user=await currentUser(); if(!user) return [];
      const {data,error}=await window.supabaseClient.from('prediction_history').select('id,percentile,category,branch,region,round,result_count,created_at').eq('user_id',user.id).order('created_at',{ascending:false}).limit(50);
      if(error) throw error;
      return data||[];
    },

    async addPrediction(item){
      const user=await currentUser(); if(!user) throw new Error('Please log in first.');
      const {error}=await window.supabaseClient.from('prediction_history').insert({user_id:user.id,percentile:Number(item.percentile),category:item.category,branch:item.branch,region:item.region,round:item.round,result_count:Number(item.count)||0});
      if(error) throw error;
    },

    async clearHistory(){
      const user=await currentUser(); if(!user) return;
      const {error}=await window.supabaseClient.from('prediction_history').delete().eq('user_id',user.id);
      if(error) throw error;
    }
  };

  // Remove the old shared browser keys. They were not account-specific and could
  // cause Account A's data to appear for Account B on the same browser.
  try{
    localStorage.removeItem('mahacollege_favorites');
    localStorage.removeItem('mahacollege_prediction_history');
  }catch(e){}
})();
