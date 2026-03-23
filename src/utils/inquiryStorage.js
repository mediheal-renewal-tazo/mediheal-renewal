const STORAGE_KEY = 'mediheal_inquiries';

export const getInquiries = () => {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
};

const saveAll = (items) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
};

export const addInquiry = ({ userId, title, content }) => {
    const items = getInquiries();
    const nextId = items.length > 0 ? Math.max(...items.map((i) => i.id)) + 1 : 1;
    const newItem = {
        id: nextId,
        userId,
        title,
        content,
        status: '답변대기',
        createdAt: new Date().toISOString().slice(0, 10),
    };
    saveAll([newItem, ...items]);
    return newItem;
};

export const updateInquiry = (id, { title, content }) => {
    const items = getInquiries().map((item) =>
        item.id === id ? { ...item, title, content } : item
    );
    saveAll(items);
};

export const deleteInquiry = (id) => {
    saveAll(getInquiries().filter((item) => item.id !== id));
};
