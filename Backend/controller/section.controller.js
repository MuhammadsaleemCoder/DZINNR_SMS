import Section from "../model/section.model";

export const createSection = async (req, res) => {
  try {
    const { sectionId } = req.body;
    if (!sectionId) {
      res.status(400).json({ success: false, message: error.message });
    }

    const section = await Section.create({
      section: sectionId,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
