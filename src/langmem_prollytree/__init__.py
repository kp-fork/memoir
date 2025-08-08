"""
LangMem-ProllyTree Integration
High-performance semantic memory system for AI agents.
"""

__version__ = "0.1.0"

try:
    from .core.memory_manager import ProllyTreeMemoryStoreManager
    from .core.prolly_adapter import ProllyTreeStore, MemoryItem
except ImportError:
    # Fall back to simplified version for testing
    from .core.simple_memory_manager import SimpleMemoryManager as ProllyTreeMemoryStoreManager
    from .core.mock_store import MockProllyTreeStore as ProllyTreeStore
    # Mock MemoryItem
    from pydantic import BaseModel, Field
    from typing import Any, Dict, Optional
    import time
    
    class MemoryItem(BaseModel):
        key: str
        namespace: str
        content: Any
        metadata: Dict[str, Any] = Field(default_factory=dict)
        timestamp: float = Field(default_factory=time.time)
        version: Optional[str] = None
        confidence: float = 1.0
from .taxonomy.semantic_taxonomy import SemanticTaxonomy, get_taxonomy, TaxonomyCategory
from .taxonomy.semantic_classifier import SemanticClassifier, OptimizedClassifier, ClassificationResult
from .search.hierarchical_search import HierarchicalSearchEngine, SearchStrategy, SearchResult

__all__ = [
    # Core
    "ProllyTreeMemoryStoreManager",
    "ProllyTreeStore",
    "MemoryItem",
    
    # Taxonomy
    "SemanticTaxonomy",
    "get_taxonomy",
    "TaxonomyCategory",
    
    # Classification
    "SemanticClassifier",
    "OptimizedClassifier", 
    "ClassificationResult",
    
    # Search
    "HierarchicalSearchEngine",
    "SearchStrategy",
    "SearchResult",
]