import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

function ResearchCenter() {
  const [title, setTitle] = useState('');
  const [abstract, setAbstract] = useState('');
  const [researchPapers, setResearchPapers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const researchCollectionRef = collection(db, 'researchPapers');

  useEffect(() => {
    const fetchResearchPapers = async () => {
      const data = await getDocs(researchCollectionRef);
      setResearchPapers(data.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchResearchPapers();
  }, []);

  const handleUpload = async () => {
    if (title.trim() && abstract.trim()) {
      await addDoc(researchCollectionRef, {
        title,
        abstract,
      });
      setTitle('');
      setAbstract('');
      // Refresh the list after upload
      const data = await getDocs(researchCollectionRef);
      setResearchPapers(data.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    }
  };

  const filteredPapers = researchPapers.filter(paper =>
    paper.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: '1rem' }}>
      <h2>📚 Research Center</h2>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Search research titles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ width: '300px', padding: '8px', marginRight: '8px' }}
        />
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3>Upload Your Research</h3>
        <input
          type="text"
          placeholder="Research Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ display: 'block', width: '300px', padding: '8px', marginBottom: '0.5rem' }}
        />
        <textarea
          placeholder="Research Abstract"
          value={abstract}
          onChange={(e) => setAbstract(e.target.value)}
          style={{ display: 'block', width: '300px', height: '100px', padding: '8px', marginBottom: '0.5rem' }}
        />
        <button
          onClick={handleUpload}
          style={{ padding: '10px 20px', cursor: 'pointer' }}
        >
          Upload
        </button>
      </div>

      <div>
        <h3>All Research Papers</h3>
        {filteredPapers.length > 0 ? (
          filteredPapers.map((paper) => (
            <div key={paper.id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
              <h4>{paper.title}</h4>
              <p>{paper.abstract}</p>
            </div>
          ))
        ) : (
          <p>No research papers found.</p>
        )}
      </div>
    </div>
  );
}

export default ResearchCenter;
