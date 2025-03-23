const IdeaModel = require('../models/ideaModels');

// Get all ideas
exports.getAllIdeas = async (req, res) => {
    const { data, error } = await IdeaModel.getAllIdeas();
    if (error) return res.status(500).json({ error: error.message });
    res.json({ ideas: data });
};

// Get an idea by ID
exports.getIdeaById = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await IdeaModel.getIdeaById(id);
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
};

// Create a new idea
exports.createIdea = async (req, res) => {
    const { title, category } = req.body;
    const { data, error } = await IdeaModel.createIdea(title, category);
    if (error) return res.status(500).json({ error: error.message });
    res.status(201).json(data);
};

// Get ideas by category
exports.getIdeasByCategory = async (req, res) => {
    const { category } = req.params;
    const { data, error } = await IdeaModel.getIdeasByCategory(category);
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
};

// Update an idea's status
exports.updateIdeaStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const { data, error } = await IdeaModel.updateIdeaStatus(id, status);
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
};

// Delete an idea
exports.deleteIdea = async (req, res) => {
    const { id } = req.params;
    const { error } = await IdeaModel.deleteIdea(id);
    if (error) return res.status(500).json({ error: error.message });
    res.json({ message: "Idea deleted successfully" });
};
