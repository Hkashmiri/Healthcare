import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Brain, Cpu, Lightbulb } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

const EducationalHub = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResources = async () => {
      const querySnapshot = await getDocs(collection(db, "educational-resources"));
      const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setResources(data);
      setLoading(false);
    };

    fetchResources();
  }, []);

  const handleSaveProgress = async (title) => {
    try {
      await addDoc(collection(db, "user-progress"), {
        title,
        timestamp: new Date(),
      });
      alert("Progress saved!");
    } catch (error) {
      console.error("Error saving progress:", error);
    }
  };

  if (loading) return <p className="text-center p-10">Loading educational resources...</p>;

  return (
    <div className="p-6 md:p-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">Educational Hub</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {resources.map((resource, index) => (
          <Card key={index} className="rounded-2xl shadow-lg p-4 hover:shadow-2xl transition">
            <CardContent className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                {resource.icon === "ai" && <Cpu className="w-8 h-8 text-blue-600" />} 
                {resource.icon === "neuro" && <Brain className="w-8 h-8 text-green-600" />} 
                {resource.icon === "modeling" && <Lightbulb className="w-8 h-8 text-yellow-600" />} 
                {resource.icon === "quiz" && <BookOpen className="w-8 h-8 text-purple-600" />} 
                <h2 className="text-xl font-semibold">{resource.title}</h2>
              </div>
              <p className="text-gray-600">{resource.description}</p>
              <div className="flex gap-2">
                <Button variant="outline" asChild>
                  <a href={resource.link}>Learn More</a>
                </Button>
                <Button onClick={() => handleSaveProgress(resource.title)}>
                  Save Progress
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EducationalHub;
