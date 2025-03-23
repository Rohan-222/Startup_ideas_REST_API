const supabase = require('../config/supabaseClient');

class IdeaModel {
    static async getAllIdeas() {
        return await supabase.from('ideas').select('*');
    }

    static async getIdeaById(id) {
        return await supabase.from('ideas').select('*').eq('id', id).single();
    }

    static async createIdea(title, category) {
        return await supabase.from('ideas').insert([{ title, category }]);
    }

    static async getIdeasByCategory(category) {
        return await supabase.from('ideas').select('*').eq('category', category);
    }

    static async updateIdeaStatus(id, status) {
        return await supabase.from('ideas').update({ status }).eq('id', id);
    }

    static async deleteIdea(id) {
        return await supabase.from('ideas').delete().eq('id', id);
    }
}

module.exports = IdeaModel;
